import React from 'react';
import './index.less';
const Button = ({ text }: { text: string }) => (
    <button className="btn">这是一个组件按钮{text}</button>
);
export default Button;
