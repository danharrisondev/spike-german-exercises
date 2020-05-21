import styled from 'styled-components';

const Button = styled.button`
    appearance: none;
    -moz-appearance:  none;
    -webkit-appearance: none;
    margin: 0 5px;
    padding: 10px 20px;
    background: #4cb52a;
    border: 1px solid #224d1f;
    border-radius: 2px;
    font-weight: bold;
    color: #fff;
    transition: background 0.3s;

    &:hover {
        background: #3d9421;
    }
`;

export default Button;