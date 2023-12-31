import { styled } from 'styled-components';

const TitleStyle = styled.h2`
  font-size: 2.125rem;
  text-align: center;
  line-height: 1.6;
  white-space: pre-line;
`;

const Title = ({ title }: { title: string }) => <TitleStyle>{title}</TitleStyle>;

export default Title;
