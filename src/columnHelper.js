class GridieColumn {
  constructor(name, label, type) {
    this.column = {
      name,
      label,
      type,
      attrs: {},
    };
  }

  get() {
    return this.column;
  }

  class(className) {
    this.column.attrs.class = className;

    return this;
  }

  attrs(attributes) {
    this.column.attrs = attributes;

    return this;
  }

  extend(attributes) {
    this.column = {
      ...this.column,
      ...attributes,
    };

    return this;
  }
}

export default function (name, label, type = null) {
  return new GridieColumn(name, label, type);
}
