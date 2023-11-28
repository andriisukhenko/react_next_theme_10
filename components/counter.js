import { connect } from "react-redux";
import { increment, decrement, incrementByAmount } from '@/store/counterSlice';

function Counter({ value, increment, decrement, incrementByAmount }) {
    return (
        <div className="counter">
            <button onClick={() => decrement()}>-</button>
            <span>{value}</span>
            <button onClick={() => increment()}>+</button>    
        </div>
    )
}

const mapStateToProps = (state) => ({
    value: state.counter.value
});

const mapDispatchToProp = { increment, decrement, incrementByAmount };

export default connect(mapStateToProps, mapDispatchToProp)(Counter);