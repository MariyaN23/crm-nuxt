interface IAuthStore {
    email: string
    name: string
    status: boolean
}

const defaultValue: { user: IAuthStore } = {
    user: {
        email: '',
        name: '',
        status: false
    }
}

export const useAuthStore = defineStore('auth', {
    state: () => defaultValue,
    getters: {
        isAuth: state => !!state.user.status
    },
    actions: {
        set(input: IAuthStore) {
            this.$patch({user: input})
        },
        clear() {
            this.$patch(defaultValue)
        },
    }
})
