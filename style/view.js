import styled from 'styled-components/native';

export const Dashed = styled.View`
  border-width: ${(props) => props.borderWidth}px;
  width: ${(props) => props.width}px;
`;
export const HeightSpace = styled.View`
  height: ${(props) => props.height}px;
`;
export const WidthSpace = styled.View`
  width: ${(props) => props.width}px;
`;
export const FlexRowCenterView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ColorDashed = styled.View`
  border-width: ${(props) => props.borderWidth}px;
  width: ${(props) => props.width}px;
  border-color: #c34949;
`;
