<template>
	<div class="ct__header">
		<router-link
			:to="{
				name: 'tableOne',
			}"
			class="ct__header__link"
			active-class="active"
		>Таблица 1 (часы, инпуты)</router-link>
		&nbsp;
		<router-link
			:to="{
				name: 'tableTwo',
			}"
			class="ct__header__link"
			active-class="active"
		>Таблица 2 (дни, картинки)</router-link>
	</div>
</template>

<script>
export default {
	name: 'CtHeader',
};
</script>

<style lang="scss" scoped>
.ct {
	&__header {
		display: flex;
		justify-content: center;
		align-items: center;

		&__link {
			margin: 10px 20px 40px 20px;
			color: #bdbebd;
			text-decoration: none;

			&.active, &:hover {
				color: #000000;
			}
		}
	}
}
</style>
