<template>
	<div class="ct">
		<ct-header />

		<div class="ct__inner">
			<router-view></router-view>
		</div>
    </div>
</template>

<script>
import CtHeader from '@/components/Header';

export default {
	name: 'CtHome',
	components: {
		CtHeader,
	},
};
</script>

<style lang="scss" scoped>
.ct {
	&__inner {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
