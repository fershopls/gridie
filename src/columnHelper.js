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

  format(callback) {
    this.column.format = callback;

    return this;
  }

  type(type) {
    this.column.type = type;

    return this;
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
