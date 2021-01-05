import { newObject } from "../parser/parser-map.js";
import { namedProps as n } from "../../utils/global-constants.js";
import { ifcDataTypes as d } from "../../utils/ifc-data-types.js";
import { getName, ifcTypes as t } from "../../utils/ifc-types.js";

newObject({
  [n.ifcClass]: getName(t.IfcQuantityArea),
  Name: d.text,
  Description: d.text,
  Unit: d.id,
  AreaValue: d.number,
});

newObject({
  [n.ifcClass]: getName(t.IfcElementQuantity),
  GlobalId: d.text,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  MethodOfMeasurement: d.text,
  Quantities: d.id
});
