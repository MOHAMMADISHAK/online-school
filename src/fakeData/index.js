import soft from './soft';
import iot from './iot';
import prog from './prog';
import business from './business';

const fakeData = [...soft, ...iot, ...prog,...business];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;