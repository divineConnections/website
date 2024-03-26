import { useState } from "react";

type CypressIdentifier = {
  cy?: string;
};

type CounterProps = {
  count?: number;
  countBy?: number;
} & CypressIdentifier;

function Counter({ count: initialCount = 0, countBy = 1, ...props }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="ui-flex ui-items-center ui-gap-x-4 ui-p-4" data-cy={props.cy}>
      {/* fix */}
      <button
        onClick={() => setCount(count + countBy)}
        className="ui-rounded-lg ui-bg-primary ui-p-3 ui-text-white"
      >
        Increment
      </button>
      <p className="ui-text-red ui-rounded-lg ui-border ui-border-emerald-950 ui-bg-primary ui-p-2 ui-text-4xl ui-text-emerald-300 ui-transition-all">
        Count: <span className="font-semibold">{count}</span>
      </p>
    </div>
  );
}

export default Counter;
