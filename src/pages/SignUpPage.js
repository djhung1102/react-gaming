import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button/Button";
import Field from "../components/field/Field";
import IconEyeClose from "../components/icon/IconEyeClose";
import IconEyeOpen from "../components/icon/IconEyeOpen";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    fullname: yup.string().required("Please enter your fullname"),
    email: yup
        .string()
        .email("Please enter valid email")
        .required("Please enter your email"),
    password: yup
        .string()
        .min(8, "Your password must be at least 8 charators or greater")
        .required("Please enter your password"),
});

const SignUpPage = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    const handleSignUp = (values) => {
        console.log(values);
        if (!isValid) return;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    };
    console.log(errors);
    const [tooglePassword, setTooglePassword] = useState(false);
    return (
        <form
            className="max-w-[350px] mx-auto my-10"
            onSubmit={handleSubmit(handleSignUp)}
        >
            <Field>
                <Label htmlFor="username">Fullname</Label>
                <Input
                    type="text"
                    name="fullname"
                    placeholder="Enter your fullname"
                    control={control}
                />
                {errors.fullname && (
                    <p className="text-red-400 text-sm">
                        {errors.fullname.message}
                    </p>
                )}
            </Field>
            <Field>
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    control={control}
                />
                {errors.email && (
                    <p className="text-red-400 text-sm">
                        {errors.email.message}
                    </p>
                )}
            </Field>
            <Field>
                <Label htmlFor="password">Password</Label>
                <Input
                    type={tooglePassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    control={control}
                >
                    {tooglePassword ? (
                        <IconEyeOpen
                            onClick={() => {
                                setTooglePassword(false);
                            }}
                        ></IconEyeOpen>
                    ) : (
                        <IconEyeClose
                            onClick={() => {
                                setTooglePassword(true);
                            }}
                        ></IconEyeClose>
                    )}
                </Input>
                {errors.password && (
                    <p className="text-red-400 text-sm">
                        {errors.password.message}
                    </p>
                )}
            </Field>
            <Button
                className="p-5 leading-4 text-white bg-slate-900 font-semibold rounded-lg mt-2 w-full select-none disabled:opacity-50 disabled:pointer-events-none"
                type="submit"
                disabled={isSubmitting}
            >
                Sign Up
            </Button>
        </form>
    );
};

export default SignUpPage;
