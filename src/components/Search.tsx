import React, { FormEvent } from "react";
import { Icon } from ".";
import { FormData } from "../utils";

type Props = {
  onChange: (search: string) => void;
};

export function Search({ onChange }: Props) {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const search = FormData(event.currentTarget).search as string;

    onChange(search);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="search">
        <input type="search" name="search" id="search" />
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <button>
          <span className="sr-only">Search</span>
          <Icon.Arrow />
        </button>
      </div>
    </form>
  );
}
