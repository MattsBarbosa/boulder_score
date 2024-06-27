import styled from 'styled-components'

export const Item = styled.li`
    margin: 15px auto;
    border: solid 1px;
    border-radius: 20px;
    text-align: center;
    padding: 18px;
    width: 50%;
    background-color: #fff;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    p {
        margin: 5px;

        b {
            padding: 10px;
        }
    }
`