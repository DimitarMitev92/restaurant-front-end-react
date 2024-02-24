import styled from "styled-components";

export const UserAddressesWrapper = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AddressCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  background-color: var(--color-yellow);
  padding: 1em;
  border-radius: 0.2em;
`;

export const AddressText = styled.p`
  color: #fff;
`;
