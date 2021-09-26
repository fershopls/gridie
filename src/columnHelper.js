class GridieColumn {
  constructor(name, label, type) {
    this.name = name;
    this.label = label;
    this.type = type;
    this._attrs = {};
  }

  attrs(attributes) {
    this._attrs = attributes;

    return this;
  }
}

export default function (name, label, type = null) {
  return new GridieColumn(name, label, type);
}
