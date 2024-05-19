<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { z } from 'zod';

const validationSchema = toTypedSchema(z.object({
	email: z.string().email().min(1, { message: "Field email is required"}),
	password: z.string().min(1, { message: "Field password is required"}),
}))

const { defineField, values, errors, handleSubmit } = useForm({
	validationSchema,
	initialValues: {
		email: "",
		password: ""
	}
})

const [email, emailAttr] = defineField('email')
const [password, passwordAttr] = defineField('password')

const onSumit = handleSubmit(values => {
	console.log(values)
})
</script>
<template>
	{{ errors, values }}
	<form class="flex gap-y-4 flex-col" @submit.prevent="onSumit">
		<AtomInput v-model="email" v-bind="emailAttr" name="email">
			<template #default>
				<span class="mb-2 block">Email address</span> 
			</template>
		</AtomInput>
		<AtomInput v-model="password" v-bind="passwordAttr" name="password" type="password">
			<template #default>
				<span class="mb-2 block">Password</span> 
			</template>
		</AtomInput>
		<AtomButton class="font-bold mt-6" type="submit">
			Sign In
		</AtomButton>
	</form>
</template>
