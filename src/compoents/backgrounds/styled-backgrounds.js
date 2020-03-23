import styled from 'styled-components';
import {gray} from '../theme/colors';

export const BoxContainer = styled.div`
  background-color: ${gray['00']};
  border-width: 1px;
  border-style: solid;
  border-color: ${gray['30']};
  border-radius: 4px;
  padding-top: ${({pt}) => pt || '0rem'};
  padding-bottom: ${({pb}) => pb || '0rem'};
  padding-left: ${({pl}) => pl || '0rem'};
  padding-right: ${({pr}) => pr || '0rem'};
  margin-top: ${({mt}) => mt || '0rem'};
  margin-bottom: ${({mb}) => mb || '0rem'};
  margin-left: ${({ml}) => ml || '0rem'};
  margin-right: ${({mr}) => mr || '0rem'};
  margin: ${({margin}) => margin && margin};
  padding: ${({padding}) => padding && padding};
`;
