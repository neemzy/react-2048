import handleMove from '../src/services/handleMove';
import keys from '../src/arrowKeys';

describe('handleMove', function() {
    it('should work', function() {
        let board = [
                [2, null, null, null],
                [2, null, null, null],
                [null, null, null, null],
                [null, null, null, null]
            ],

            expected = [
                [4, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null]
            ];

        expect(handleMove(board, keys.UP)).toEqual(expected);
    });
});
