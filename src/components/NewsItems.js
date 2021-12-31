import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let {
      title,
      description,
      imgUrl,
      newsUrl,
      author,
      date,
      source,
    } = this.props;
    return (
      <div className="card my-2">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {source}
        </span>

        <img
          src={
            !imgUrl
              ? "https://cdn.arstechnica.net/wp-content/uploads/2021/12/visionTOP-800x528.jpg"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="cart-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItems;
