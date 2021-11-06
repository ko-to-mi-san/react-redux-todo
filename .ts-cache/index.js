import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
function App() {
    return (React.createElement(Container, null,
        React.createElement(Header, null,
            React.createElement(Logo, null, "Kanban board"),
            React.createElement(CardFilter, { placeholder: "Filter cards" })),
        React.createElement(MainArea, null,
            React.createElement(Column, null,
                React.createElement(ColumnHeader, null, "TODO"),
                React.createElement(Card, null, "\u671D\u98DF\u3092\u3068\u308B"),
                React.createElement(Card, null, "\u6B6F\u3092\u78E8\u304F"),
                React.createElement(Card, null, "\u30E9\u30F3\u30CB\u30F3\u30B0")),
            React.createElement(Column, null,
                React.createElement(ColumnHeader, null, "Doing"),
                React.createElement(Card, null, "\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0"),
                React.createElement(Card, null, "\u98A8\u5442\u306B\u5165\u308B")),
            React.createElement(Column, null,
                React.createElement(ColumnHeader, null, "Waiting")),
            React.createElement(Column, null,
                React.createElement(ColumnHeader, null, "Done"),
                React.createElement(Card, null, "\u5E03\u56E3\u304B\u3089\u51FA\u308B (:3\u3063)\u3063 -=\u4E09[\uFF3F\uFF3F]")))));
}
const Container = styled.div ``;
const Header = styled.div ``;
const Logo = styled.div ``;
const CardFilter = styled.input ``;
const MainArea = styled.div ``;
const Column = styled.div ``;
const ColumnHeader = styled.div ``;
const Card = styled.div ``;
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
