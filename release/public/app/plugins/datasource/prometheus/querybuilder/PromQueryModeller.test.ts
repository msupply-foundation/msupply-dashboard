import { PromQueryModeller } from './PromQueryModeller';

describe('PromQueryModeller', () => {
  const modeller = new PromQueryModeller();

  it('Can render query with metric only', () => {
    expect(
      modeller.renderQuery({
        metric: 'my_totals',
        labels: [],
        operations: [],
      })
    ).toBe('my_totals');
  });

  it('Can render query with label filters', () => {
    expect(
      modeller.renderQuery({
        metric: 'my_totals',
        labels: [
          { label: 'cluster', op: '=', value: 'us-east' },
          { label: 'job', op: '=~', value: 'abc' },
        ],
        operations: [],
      })
    ).toBe('my_totals{cluster="us-east", job=~"abc"}');
  });

  it('Can render query with function', () => {
    expect(
      modeller.renderQuery({
        metric: 'my_totals',
        labels: [],
        operations: [{ id: 'sum', params: [] }],
      })
    ).toBe('sum(my_totals)');
  });

  it('Can render query with function with parameter to left of inner expression', () => {
    expect(
      modeller.renderQuery({
        metric: 'metric',
        labels: [],
        operations: [{ id: 'histogram_quantile', params: [0.86] }],
      })
    ).toBe('histogram_quantile(0.86, metric)');
  });

  it('Can render query with function with function parameters to the right of inner expression', () => {
    expect(
      modeller.renderQuery({
        metric: 'metric',
        labels: [],
        operations: [{ id: 'label_replace', params: ['server', '$1', 'instance', 'as(.*)d'] }],
      })
    ).toBe('label_replace(metric, "server", "$1", "instance", "as(.*)d")');
  });

  it('Can group by expressions', () => {
    expect(
      modeller.renderQuery({
        metric: 'metric',
        labels: [],
        operations: [{ id: '__sum_by', params: ['server', 'job'] }],
      })
    ).toBe('sum by(server, job) (metric)');
  });

  it('Can render avg around a group by', () => {
    expect(
      modeller.renderQuery({
        metric: 'metric',
        labels: [],
        operations: [
          { id: '__sum_by', params: ['server', 'job'] },
          { id: 'avg', params: [] },
        ],
      })
    ).toBe('avg(sum by(server, job) (metric))');
  });

  it('Can render aggregations with parameters', () => {
    expect(
      modeller.renderQuery({
        metric: 'metric',
        labels: [],
        operations: [{ id: 'topk', params: [5] }],
      })
    ).toBe('topk(5, metric)');
  });

  it('Can render rate', () => {
    expect(
      modeller.renderQuery({
        metric: 'metric',
        labels: [{ label: 'pod', op: '=', value: 'A' }],
        operations: [{ id: 'rate', params: ['auto'] }],
      })
    ).toBe('rate(metric{pod="A"}[$__rate_interval])');
  });

  it('Can render increase', () => {
    expect(
      modeller.renderQuery({
        metric: 'metric',
        labels: [{ label: 'pod', op: '=', value: 'A' }],
        operations: [{ id: 'increase', params: ['auto'] }],
      })
    ).toBe('increase(metric{pod="A"}[$__rate_interval])');
  });

  it('Can render rate with custom range-vector', () => {
    expect(
      modeller.renderQuery({
        metric: 'metric',
        labels: [{ label: 'pod', op: '=', value: 'A' }],
        operations: [{ id: 'rate', params: ['10m'] }],
      })
    ).toBe('rate(metric{pod="A"}[10m])');
  });

  it('Can render multiply operation', () => {
    expect(
      modeller.renderQuery({
        metric: 'metric',
        labels: [],
        operations: [{ id: '__multiply_by', params: [1000] }],
      })
    ).toBe('metric * 1000');
  });

  it('Can render query with simple binary query', () => {
    expect(
      modeller.renderQuery({
        metric: 'metric_a',
        labels: [],
        operations: [],
        binaryQueries: [
          {
            operator: '/',
            query: {
              metric: 'metric_b',
              labels: [],
              operations: [],
            },
          },
        ],
      })
    ).toBe('metric_a / metric_b');
  });

  it('Can render query with multiple binary queries and nesting', () => {
    expect(
      modeller.renderQuery({
        metric: 'metric_a',
        labels: [],
        operations: [],
        binaryQueries: [
          {
            operator: '+',
            query: {
              metric: 'metric_b',
              labels: [],
              operations: [],
            },
          },
          {
            operator: '+',
            query: {
              metric: 'metric_c',
              labels: [],
              operations: [],
            },
          },
        ],
      })
    ).toBe('metric_a + metric_b + metric_c');
  });

  it('Can render with binary queries with vectorMatches expression', () => {
    expect(
      modeller.renderQuery({
        metric: 'metric_a',
        labels: [],
        operations: [],
        binaryQueries: [
          {
            operator: '/',
            vectorMatches: 'on(le)',
            query: {
              metric: 'metric_b',
              labels: [],
              operations: [],
            },
          },
        ],
      })
    ).toBe('metric_a / on(le) metric_b');
  });
});
