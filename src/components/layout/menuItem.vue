<template>
    <ul :class="isTop ? 'sidebar-menu scrollable pos-r' : 'dropdown-menu'">
        <li
            class="nav-item"
            :class="{
                dropdown: menu.children,
                open: getMenuStatus(keyPrefix + menuIndex),
            }"
            v-for="(menu, menuIndex) in items"
            :key="menuIndex"
            @click.stop="toggleMenu($event, keyPrefix + menuIndex)"
        >
            <router-link
                :class="menu.children ? 'dropdown-toggle' : 'sidebar-link'"
                :href="menu.children ? 'javascript:void(0);' : menu.to"
                active-class="active"
                :to="menu.to"
            >
                <span class="icon-holder" v-if="menu.icon">
                    <i :class="menu.icon"></i>
                </span>
                <span class="title">{{ menu.text }}</span>
                <span class="arrow" v-if="menu.children">
                    <i class="ti-angle-right" v-if="menu.children"></i>
                </span>
            </router-link>
            <menuItem
                :items="menu.children"
                :isTop="false"
                :keyPrefix="menuIndex + ':'"
                v-if="menu.children"
            ></menuItem>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'menuItem',
    components: {},
    props: {
        items: {
            type: Array,
            require: true,
        },
        isTop: {
            type: Boolean,
            require: false,
            default: true,
        },
        keyPrefix: {
            type: String,
            require: false,
            default: '',
        },
    },
    data: () => ({
        menuStatus: {},
    }),
    computed: {
        computeMenuStatus: function() {
            self = this;
            return function(key) {
                console.log(
                    'compute key : ' + key + ' value ' + self.menuStatus[key]
                );
                return self.menuStatus[key];
            };
        },
    },
    methods: {
        toggleMenu(obj, key) {
            const $this = $(obj.target); //.parent();
            this.$set(this.menuStatus, key, !(this.menuStatus[key] || false));

            if (this.menuStatus[key]) {
                // Open menu
                $this
                    .parent()
                    .children('.dropdown-menu')
                    .slideDown(200, () => {
                        $this.parent().addClass('open');
                    });
            } else {
                // Close menu
                $this
                    .parent()
                    .children('.dropdown-menu')
                    .slideUp(200, () => {
                        $this.parent().removeClass('open');
                    });
            }

            console.log(
                'toggleMenu   key : ' + key + ' value ' + this.menuStatus[key]
            );
        },
        getMenuStatus(key) {
            console.log(
                'getMenuStatus key : ' + key + ' value ' + this.menuStatus[key]
            );
            return this.menuStatus[key];
        },
    },
};
</script>
