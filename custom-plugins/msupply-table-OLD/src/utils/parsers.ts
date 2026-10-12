import { getTemplateSrv } from '@grafana/runtime';
import { PanelProps, ScopedVar, VariableModel } from '@grafana/data';

interface VariableValue {
  text: string | string[];
}
export interface ScopedVariable extends VariableModel {
  current: VariableValue;
  id: string;
  options: ScopedVar[];
}

const mapVariable = (variable: ScopedVariable) => {
  const { id, current } = variable;
  const text = typeof current.text === 'string' ? (current.text as string) : (current.text as string[]).join(' + ');

  return { id, text };
};

export const parseTitle = (props: PanelProps) => {
  const { replaceVariables, title } = props;
  const variables = getTemplateSrv().getVariables() as ScopedVariable[];
  let parsedTitle = title;

  variables.map((v) => mapVariable(v)).forEach((v) => (parsedTitle = parsedTitle.replace(`\$\{${v.id}\}`, v.text)));

  return replaceVariables(parsedTitle);
};
