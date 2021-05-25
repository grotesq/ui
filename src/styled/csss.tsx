import parse from './parser';
import { cssVariables as variables } from './variable';

const parseBody = (body: string) => {
  return parse(`
.useless {
    ${body}
}
  `).stylesheet.rules[0].declarations;
};
const stringifyBody = (props: any[]) => {
  return props.map(prop => {
    if (!prop.value) return '';

    const tokens = prop.value.split(' ');
    return `${prop.property}: ` + tokens.map(token => {
      if (variables[token])
        return variables[token];
      return token;
    }).join(' ') + ';';
  }).join('\n');
};
export const transpile = (input: string) => {
  return stringifyBody(parseBody(input));
};
