import { type SchemaTypeDefinition } from "sanity";

import { reviewType } from "./reviewType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [reviewType],
};
