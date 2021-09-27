import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchs(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchInfo(this.state.search, this.state.type);
      }
    );
  };
  refresh = () => {
    setTimeout(function () {
      document.location.reload();
    }, 100);
  };

  render() {
    return (
      <div className="row">
        <div>
          <label>
            <button
              className="with-gap"
              name="type"
              data-type="all"
              onClick={this.refresh}
              checked={this.state.type === "all"}
            >
              All
            </button>
          </label>
          <label>
            <button
              className="with-gap"
              name="type"
              data-type="business"
              onClick={this.handleFilter}
              checked={this.state.type === "business"}
            >
              business
            </button>
          </label>
          <label>
            <button
              className="with-gap"
              name="type"
              data-type="sport"
              onClick={this.handleFilter}
              checked={this.state.type === "sport"}
            >
              sport{" "}
            </button>
          </label>
          <label>
            <button
              className="with-gap"
              name="type"
              data-type="health"
              onClick={this.handleFilter}
              checked={this.state.type === "health"}
            >
              health
            </button>
          </label>
          <label>
            <button
              className="with-gap"
              name="type"
              data-type="technology"
              onClick={this.handleFilter}
              checked={this.state.type === "technology"}
            >
              technology
            </button>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
