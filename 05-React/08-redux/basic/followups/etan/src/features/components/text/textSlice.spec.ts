import textReducer, {TextState, increment, decrement, incrementByAmount} from '../../slices/textSlice';

describe('text reducer', () => {
    const initialState: TextState = {
        value: '',
        status: 'idle',
    };
    it('should handle initial state', () => {
        expect(textReducer(undefined, {type: 'unknown'})).toEqual({
            value: '',
            status: 'idle',
        });
    });

    it('should handle increment', () => {
        const actual = textReducer(initialState, increment(''));
        expect(actual.value).toEqual('');
    });

    it('should handle decrement', () => {
        const actual = textReducer(initialState, decrement(''));
        expect(actual.value).toEqual(2);
    });

    it('should handle incrementByAmount', () => {
        const actual = textReducer(initialState, incrementByAmount(2));
        expect(actual.value).toEqual(5);
    });
});
