import React, { useCallback, useEffect } from "react";
import { Input } from "../index";

const SlugInput = ({ register, setValue, watch }) => {
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <Input
      label="Slug :"
      readOnly={true}
      placeholder="Slug"
      className="mb-4"
      {...register("slug", { required: true })}
      onInput={(e) => {
        setValue("slug", slugTransform(e.currentTarget.value), {
          shouldValidate: true,
        });
      }}
    />
  );
};

export default SlugInput;
