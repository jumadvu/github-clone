import styled from 'styled-components';
import Section from './Section';

const CenteredSection = styled(Section)`
  text-align: center;
  max-width: calc(968px + 16px * 2);
  background-color: #22272e;
  border-color: #414851;
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
}
`;

export default CenteredSection;
