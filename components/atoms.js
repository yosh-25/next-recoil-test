import {atom} from 'recoil';

export const countState = atom({
    key: 'count',
    default: 0
})

export const userState = atom({
    key: 'user',
    default: {
        name: 'hoge',
        age:11
    }
});