import { css } from '@emotion/css';
import { DataSourceApi, GrafanaTheme2 } from '@grafana/data';
import { Stack } from '@grafana/experimental';
import { ButtonCascader, CascaderOption, useStyles2 } from '@grafana/ui';
import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { QueryBuilderOperation, QueryWithOperations, VisualQueryModeller } from '../shared/types';
import { OperationEditor } from './OperationEditor';

export interface Props<T extends QueryWithOperations> {
  query: T;
  datasource: DataSourceApi;
  onChange: (query: T) => void;
  onRunQuery: () => void;
  queryModeller: VisualQueryModeller;
  explainMode?: boolean;
}

export function OperationList<T extends QueryWithOperations>({
  query,
  datasource,
  queryModeller,
  onChange,
  onRunQuery,
}: Props<T>) {
  const styles = useStyles2(getStyles);
  const { operations } = query;

  const onOperationChange = (index: number, update: QueryBuilderOperation) => {
    const updatedList = [...operations];
    updatedList.splice(index, 1, update);
    onChange({ ...query, operations: updatedList });
  };

  const onRemove = (index: number) => {
    const updatedList = [...operations.slice(0, index), ...operations.slice(index + 1)];
    onChange({ ...query, operations: updatedList });
  };

  const addOptions: CascaderOption[] = queryModeller.getCategories().map((category) => {
    return {
      value: category,
      label: category,
      children: queryModeller.getOperationsForCategory(category).map((operation) => ({
        value: operation.id,
        label: operation.name,
        isLeaf: true,
      })),
    };
  });

  const onAddOperation = (value: string[]) => {
    const operationDef = queryModeller.getOperationDef(value[1]);
    onChange(operationDef.addOperationHandler(operationDef, query, queryModeller));
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const updatedList = [...operations];
    const element = updatedList[result.source.index];
    updatedList.splice(result.source.index, 1);
    updatedList.splice(result.destination.index, 0, element);
    onChange({ ...query, operations: updatedList });
  };

  return (
    <Stack gap={1} direction="column">
      <Stack gap={1}>
        {operations.length > 0 && (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="sortable-field-mappings" direction="horizontal">
              {(provided) => (
                <div className={styles.operationList} ref={provided.innerRef} {...provided.droppableProps}>
                  {operations.map((op, index) => (
                    <OperationEditor
                      key={index}
                      queryModeller={queryModeller}
                      index={index}
                      operation={op}
                      query={query}
                      datasource={datasource}
                      onChange={onOperationChange}
                      onRemove={onRemove}
                      onRunQuery={onRunQuery}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
        <div className={styles.addButton}>
          <ButtonCascader
            key="cascader"
            icon="plus"
            options={addOptions}
            onChange={onAddOperation}
            variant="secondary"
            hideDownIcon={true}
            buttonProps={{ 'aria-label': 'Add operation', title: 'Add operation' }}
          />
        </div>
      </Stack>
    </Stack>
  );
}

const getStyles = (theme: GrafanaTheme2) => {
  return {
    heading: css({
      fontSize: 12,
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: 0,
    }),
    operationList: css({
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(2),
    }),
    addButton: css({
      paddingBottom: theme.spacing(1),
    }),
  };
};
