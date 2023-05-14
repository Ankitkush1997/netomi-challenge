import React from "react";
import "./icon.css";
const Icon = ({
  heartFilled,
  heartOutline,
  leftArrow,
  rightArrow,
  handleClick,
  onClick,
  disabled,
  navLogo,
}) => {
  return (
    <>
      {heartOutline && (
        <img
          className="heart-icon"
          onClick={handleClick}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAElEQVR4nO2Z+0tUQRTHP25pG6WGaWmSBQlaJhSVFihl5i9tTy3QILUfKnrTQ3r5aPcvjwPfgcM+767X6wj7gQu7e2bOnLnnzMyZs9CmTZs2bSKnH5gF1oHPwCawDWwAa8BttUnKAHBHfTeka1O67bcZ4GSaExiW8aUETxFYBQbr6BtSm2JCnevAmd1M4BBQcAP+Bp4A43rzXcBhoBcYAx6qjbX9B9wFck6ffZ6XLOh7oL690tUl3eMaK+gzG+6X6UvEUeCVlGzJgCMJ+lmbOYWJ9V3S4PY802/bapNU37xsCN7JN+OJMInvCoVmGVTfkiYQJvGtQdjVwkLrh5tMIs8U3CS6aZ0TbjJBn4VQq3S7yViYNVzYRbmyFU9Ue5PbetLQNyTbio30hd3J4jItZvSkxT3ZaFt0VfrdbpJkISYlLPa0yLvdrOo5MyuhbXux81S2VvX0moS2h8fOxXrh9UXCPuKnX7ZaOlPBpoR2usZOl2w1mysIp6elCrHT6bKOCjYk3M0hmBU9stUOyAo+SLirTDMjhmXr+2rCJQlvED/TsnWxaWFkLMnWqVo3NhP+iXzBdwJ/ZWvNG+k7NZggXiZl49t6jW6qkU2og/jo0AKvGVbebWEbvkR8TLhtt2H4T7vGia+VGZB3F6u63gjkFH8lZZmxsCib3jRzLTjtCggxnCtTrnBhu2tTXFPnHeAC+8eobDBbrraqpOCyzBGy55xLZhsWHOphsfjcTSZLz5x3B99yGtdlq3O9cDFqB9JeM+nW6LJsSIWc7vKhRvUo5YKCH2fBlWlDpTL1U3XODfJSpdW0MF2rrtY7t9fZxZgSSxvwK3A2BZ0jKqeWpNvGyAQrUHx0lfeFFuM4pzLUjismDLAPBYDHbt28brIC06c+IZTsb4l9LXyMukRzS2+4Xmyb7Lqr2vyMqZZ2DFhx3llVgaCcHlcIDFur9Y0yzf7lFu1lJxsvk5lXouZ4mXcK+ostfF9RmwPDFbcOQlZwiwPKKeCTHvt8oMlHdtNsQxb8B7JqhpNeci7uAAAAAElFTkSuQmCC"
          alt="heart-icon"
        />
      )}
      {heartFilled && (
        <img
          className="heart-icon"
          onClick={handleClick}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwklEQVR4nO2Zy2sTURjFr09QO3POJEgpdOkLURQUXCnu3AiKC5ddulJUxMdWEXSrFBSKm6og+B/Y6MYHKghSFMWNIGibfF9rpV1YlY7cNEI0EzM3TXInkAMHZjPfnB/ffczcMaannnrqqacsS4JgswDnlSwo8E6BOSHnFZhQ8pEAF4vkjrT1isBOAS7Ze22NSq05W1vIMQHOlYJgU+sAwnC3kg+VjNNYgMclcl/desB+AZ6kradkQYBdTQPExqxSYFjIBYeHLsIs3nPz0+Dgmj/17LWQI661tFJPgOuxMSudIGaAqNzyJh76T3ee2VozYZgT8vlS6ylZ+AowfSdaAFEF89QCtaqekoVUnbHDqYUPbYsFuNZwYjczJzoOwvKcqb8AuKxOvi3kWHI38vktvsOpoxP3GYmiC76DqWtXgLO1IORY14GQD5LmxwffwdTd75OW3dkMBIudDMwmDa1578Ho7O9JIJKBYLGji7UgwHgGgsUuFuB1Ukfu+Q6mrgbuJnXkTBeCnKoBmYqibd6D0c32baQGpNKVN10DAYwnQpT3EvKk74Ca3ifqgkz096+zS1oGQsYNXJJ8PqgLUu4KcDoDQeMGPm4ayX5GKvkqA2HjentH6kOI6SjaXj5jykBwrTYwa1fXVBBVQ+xIlj57hVyYCsOjThBVMFcyNKQum2YVG7NCgTu+IRQYjY1Z3jRIBWa5kLc8DqmRJUNUwyhww0MnhmNjlplWS4BjQv7sQBd+2ZN/005NheEBIafbBgF8K5EHTSdUCoKNSr5sQydeFMNwg+mk7O5q2y/kjxYA2OF6NTZmtfElDYI9SzlKEvJjidxrsqDPAwNr7Ql5E6vSaMO3WB8S4LCSkykgJoU8ZLKsGfu3C7j9n6F0/0tf33rTLVJy6K836MXrIdON0lxuqwBvre216WZpLhda+87Rk+mwfgPlJOO3PTuGfAAAAABJRU5ErkJggg=="
          alt="heart-filled-icon"
        />
      )}

      {leftArrow && (
        <img
          onClick={onClick}
          className="left-arrow"
          disabled={disabled}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVR4nO3ZsQrCMBSF4TyhoigO+u6Cgwp9BAu/3EkCyZR7QoXzbR0OpPZ3sJZi9t+AA/ACFuCk2kgBF+DDz6LYSDUOFN7ZG6nOgeL6mLmRAs6NA63ANXMj5Zuo+UkMcU611V/sEc6p5pyGOKeacxrinGrOaYhz2kpOId5YdH6p3UriZgp8M/jJyDkznJmeM8OZ6TkznJmeM8OZ6TkztptZ74/NfeZmis7BHtmbKRoHeyo2U0QawD0+WWCn2piVXF+4l8Vv/XC87AAAAABJRU5ErkJggg=="
          alt="left-arrow"
        />
      )}
      {rightArrow && (
        <img
          className="right-arrow"
          onClick={onClick}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyElEQVR4nO3ZMQrCQBQG4XhCRRQLPbuFoiB6AwMjYkAXUri7eUuK+SqbH17IgKBdJ7UHbIEHcAFWUZtQwAK48/UEdlNvmgBuP0f9+zDZm3DAejjk78NKNk0Am5HDeuAw5aYJfBh8M+HMDDOLZ2aYWTwzw8zimRlmFs/MmGFmwy8rY0ftp9yE8iFSvokq5pQypyrmlOr9nqhhTilzqmJOKXOqYk4zymlZ8Gdo9iYccM49qGQTDrjmHlSyCccnkxNwfH+O2kjdfL0AHYfLbeZQ+MIAAAAASUVORK5CYII="
          alt="right-arrow"
        />
      )}
      {navLogo && (
        <img
          className="navLogo"
          alt="pokemon"
          src="data:image/png;base64,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"
        />
      )}
    </>
  );
};

export default Icon;
