import styled from "styled-components";

interface ITableContainerProps {
  tagcolor?: string;
}

export const TableContainer = styled.div<ITableContainerProps>`
  margin-top: 4rem;

  & table {
    width: 100%;
    border-spacing: 0 0.5rem;
    // border-collapse: collapse;
    /* 
  padding: 1rem;
  border-collapse: collapse;
  margin: 0 0 2em 0;
  background-color: beige; 
  text-align: left;
  */
  }

  & thead {
    padding: 8px 0px 8px 0px;
    background-color: ${(props) => props.theme.colors.light};

    & tr {
      /* border: 1px solid #000; */
      text-align: left;
      /*padding: 0.5em;*/
    }
  }

  & th {
    /* border: 1px solid #000; */
    padding: 1rem 2rem;
    height: 2.5rem;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    color: ${(props) => props.theme.colors.dark_light};
  }

  & tbody {
    padding: 8px 0px 8px 0px;
    background-color: #fff;
  }

  & td {
    /* border: 1px solid #000; */
    /* border-bottom: 1px solid #ccc; */
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    height: 2.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.dark_light};

    &:first-child {
      color: ${(props) => props.theme.colors.dark};
    }

    &.deposit {
      color: ${(props) => props.theme.colors.green};
    }

    &.withdraw {
      color: ${(props) => props.theme.colors.red};
    }

    /* Pega as td de uma em uma */

    /* .table-default tbody tr:nth-child(1) td {
            background: red;
        } */

    /* Pega todas td impar */
    /* .table-default tbody tr:nth-child(odd) td {
            background: red;
        } */

    /* Pega todas td pares 
    & td:nth-child(even) {
      background: #eee;
    }

      & td:first-child {
        border-top: 2px solid #666;
      }

      & td:last-child {
        border-bottom: 2px solid #666;
      }
      */
  }

  & tfoot {
    padding: 8px 0px 8px 0px;
    background-color: #ccc;
  }

  & a {
    text-decoration: none;
    margin-left: 1rem;
    color: ${(props) => props.theme.colors.gray};
  }
`;
