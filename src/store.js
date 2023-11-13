import { reactive } from 'vue';

export const store = reactive ({
    movies: [],
    series: [],
    query: '',
    API_KEY: '5eb0f534103f1fea9e85be34c9db6b10',
    flags: {
		it: '/it.png',
		en: '/en.png',
		fr: '/fr.png',
		es: '/fr.png',
	}
}
)