<template>
	<div class="input-group mt-3">
		<input
			type="text"
			class="form-control shadow-none"
			placeholder="Quote Title (Min 15 Char)"
			disabled
		/>
		<div class="input-group-append">
			<button class="btn btn-dark shadow-none" disabled>
				{{ timer }}
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		timer: String
	}
};
</script>

<style lang="scss" scoped></style>
