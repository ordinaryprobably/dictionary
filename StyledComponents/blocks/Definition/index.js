import styled from 'styled-components';
import { DefinitionP } from './Meaning';
import { OptionSpan } from './Option';

const Definition = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`

Definition.Text = DefinitionP;
Definition.Option = OptionSpan;

export default Definition;