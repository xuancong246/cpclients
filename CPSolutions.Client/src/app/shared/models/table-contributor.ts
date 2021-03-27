export interface ColumnWidth {
    type: ColumnWidthType,
    value?: number
}

export interface ColumnHeading {
    type: ColumnHeadingType,
    value: string
}

export interface ColumnContent {
    type: ColumnContentType,
    propertyName?: string,
    alignment?: ColumnContentAlignment
}

export interface Column {
    key: string,
    width: ColumnWidth,
    heading: ColumnHeading,
    content: ColumnContent,
    canSort?: boolean,
    sortType?: ColumnSortType
}
