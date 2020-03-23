import styled from 'styled-components';

export const ListItemRow = styled.div`
  align-items: center;
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: 'content actions';
  grid-template-columns: 1fr auto;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(246, 247, 248);
  gap: 16px;
  padding: 0px;
`;

export const ListItemChannelContent = styled.div`
  display: grid;
  grid-area: content / content / content / content;
  padding: 12px 16px;
`;

export const ListItemChannelLabel = styled.div`
  color: rgb(36, 41, 46);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2;
  display: inline-block;
  align-items: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0px;
  overflow: hidden;
`;

export const ListItemAction = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  position: relative;
  z-index: 10;
  color: rgb(103, 113, 122);
  flex-direction: row;
  grid-area: actions / actions / actions / actions;
  flex: 1 1 0%;
  padding: 12px 16px 12px 12px;
`;
