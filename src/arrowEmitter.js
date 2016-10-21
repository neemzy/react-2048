import { EventEmitter } from 'fbemitter';
import keys from './arrowKeys';

let emitter = new EventEmitter(),
    eventName = 'keystroke';

emitter.onKeystroke = function(callback) {
    emitter.addListener(eventName, callback);
};

document.addEventListener('keyup', function(event) {
    if ([keys.UP, keys.RIGHT, keys.DOWN, keys.LEFT].includes(event.key)) {
        emitter.emit(eventName, event.key);
    }
});

export default emitter;
