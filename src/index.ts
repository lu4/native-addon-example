import path from 'path';
import builder from 'node-gyp-build';

export interface Binding {
    hello(): void;
}

export const Binding = builder(path.resolve(path.join(__dirname, '..'))) as Binding;

console.log(Binding.hello());