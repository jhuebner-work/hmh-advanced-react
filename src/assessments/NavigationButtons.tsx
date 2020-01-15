import React from 'react';

interface NavigationButtonsProps {
  clickPrevious?: () => {};
  clickAnswer?: () => {};
  clickNext?: () => {};
  disablePrevious?: boolean;
  disableAnswer?: boolean;
  disableNext?: boolean;
  hidePrevious?: boolean;
  hideAnswer?: boolean;
  hideNext?: boolean;
}

function NavigationButtons(props: NavigationButtonsProps) {
  return (
    <div className="field is-grouped">
      <p className="control" hidden={props.hidePrevious}>
        <button
          onClick={props.clickPrevious}
          disabled={props.disablePrevious}
          className="button is-link"
        >
          Previous
        </button>
      </p>
      <p className="control" hidden={props.hideAnswer}>
        <button
          onClick={props.clickAnswer}
          disabled={props.disableAnswer}
          className="button is-link"
        >
          Answer
        </button>
      </p>
      <p className="control" hidden={props.hideNext}>
        <button
          onClick={props.clickNext}
          disabled={props.disableNext}
          className="button is-link"
        >
          Next
        </button>
      </p>
    </div>
  );
}

export default NavigationButtons;
