import React from "react";
import "./Utils.css";

export function Button({ className, ...props }) {
  return <button className={["Button", className].join(" ")} {...props} />;
}

export function Input({ className, ...props }) {
  return <input className={["Input", className].join(" ")} {...props} />;
}

export function Required({ className, ...props }) {
  return (
    <span className={["Required", className].join(" ")} {...props}>
      &#42;
    </span>
  );
}
export function Section({ className, list, ...props }) {
  const classes = ["Section", list && "Section--list", className]
    .filter(Boolean)
    .join(" ");
  return <section className={classes} {...props} />;
}
