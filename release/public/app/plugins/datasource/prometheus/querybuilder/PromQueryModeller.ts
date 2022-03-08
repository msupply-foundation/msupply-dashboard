import { FUNCTIONS } from '../promql';
import { getAggregationOperations } from './aggregations';
import { getOperationDefinitions } from './operations';
import { LokiAndPromQueryModellerBase } from './shared/LokiAndPromQueryModellerBase';
import { PromQueryPattern, PromVisualQuery, PromVisualQueryOperationCategory } from './types';

export class PromQueryModeller extends LokiAndPromQueryModellerBase<PromVisualQuery> {
  constructor() {
    super(() => {
      const allOperations = [...getOperationDefinitions(), ...getAggregationOperations()];
      for (const op of allOperations) {
        const func = FUNCTIONS.find((x) => x.insertText === op.id);
        if (func) {
          op.documentation = func.documentation;
        }
      }
      return allOperations;
    });

    this.setOperationCategories([
      PromVisualQueryOperationCategory.Aggregations,
      PromVisualQueryOperationCategory.RangeFunctions,
      PromVisualQueryOperationCategory.Functions,
      PromVisualQueryOperationCategory.BinaryOps,
    ]);
  }

  renderQuery(query: PromVisualQuery) {
    let queryString = `${query.metric}${this.renderLabels(query.labels)}`;
    queryString = this.renderOperations(queryString, query.operations);
    queryString = this.renderBinaryQueries(queryString, query.binaryQueries);
    return queryString;
  }

  getQueryPatterns(): PromQueryPattern[] {
    return [
      {
        name: 'Rate then sum',
        operations: [
          { id: 'rate', params: ['auto'] },
          { id: 'sum', params: [] },
        ],
      },
      {
        name: 'Rate then sum by(label) then avg',
        operations: [
          { id: 'rate', params: ['auto'] },
          { id: '__sum_by', params: [''] },
          { id: 'avg', params: [] },
        ],
      },
      {
        name: 'Histogram quantile on rate',
        operations: [
          { id: 'rate', params: ['auto'] },
          { id: '__sum_by', params: ['le'] },
          { id: 'histogram_quantile', params: [0.95] },
        ],
      },
      {
        name: 'Histogram quantile on increase ',
        operations: [
          { id: 'increase', params: ['auto'] },
          { id: '__max_by', params: ['le'] },
          { id: 'histogram_quantile', params: [0.95] },
        ],
      },
    ];
  }
}

export const promQueryModeller = new PromQueryModeller();
