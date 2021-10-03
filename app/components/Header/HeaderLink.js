import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  display: inline-flex;
  float: left;
  padding: 0.25em 2em;
  margin: 1em 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-weight: bold;
  font-size: 14px;
  color: #41addd;
  font-weight: 500;
  line-height: 20px;
  color: #afbcc9;
  border: 1px solid #454d56;
  line-height: 1.5;
  color: #aebac7;
  background-color: #1f242a;

  &.active {
    background: #346ec9;
    border-color: #346ec9;
    color: #fff;
  }
  &.first {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  &.second {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;
