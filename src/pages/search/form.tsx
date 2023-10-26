import { Controller, useForm } from "react-hook-form";
import { Select } from "../../components/select";
import styles from "./form.module.scss";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { SearchQuery, Topic } from "../../store/types";
import { getTopics } from "../../api/topics";
import {
  PAGE_SIZE,
  setSearchQuery,
  setSearchResults,
} from "../../store/slices/searchPageSlice";
import {
  AgeSelectOptions,
  FormDefaultRating,
  Qualification,
  QualificationSelectOptions,
  RatingSelectOptions,
  Sex,
  SexSelectOptions,
} from "./formOptions";
import { searchSpecialists } from "../../api/search";
import { Label } from "../../components/label";
import { Button } from "../../components/button";
import { useTopics } from "../../utils/useTopics";

type FormValues = {
  sex: string;
  age: string;
  topic: string;
  ageFrom: string;
  ageTo: string;
  qualification: string;
  rating: string;
};

export function Form() {
  const dispatch = useDispatch();
  const topics = useTopics();

  const { handleSubmit, setValue, control } = useForm<FormValues>({
    defaultValues: {
      sex: Sex["Любого пола"],
      qualification: Qualification["Все варианты"],
      rating: FormDefaultRating,
      ageFrom: AgeSelectOptions[0].value,
      ageTo: AgeSelectOptions[AgeSelectOptions.length - 1].value,
    },
  });

  const fetchResults = (newQuery: SearchQuery) => {
    searchSpecialists(newQuery).then((results) => {
      dispatch(setSearchResults(results));
    });
  };

  const topicsOptions = useMemo(() => {
    return topics.map((topic) => ({
      value: `${topic.id}`,
      label: topic.name,
    }));
  }, [topics]);

  const onSubmit = (data: FormValues) => {
    const newQuery: SearchQuery = {
      limit: PAGE_SIZE,
      offset: 0,
      subjectId: Number(data.topic),
      ageFrom: Number(data.ageFrom),
      ageTo: Number(data.ageTo),
    };
    if (data.qualification !== Qualification["Все варианты"]) {
      newQuery.profSpeciality = Number(data.qualification);
    }
    if (data.sex !== Sex["Любого пола"]) {
      newQuery.sex = Number(data.sex);
    }
    if (data.rating !== "0") {
      newQuery.ratingFrom = Number(data.rating);
    }
    dispatch(setSearchQuery(newQuery));
    fetchResults(newQuery);
  };

  useEffect(() => {
    if (topics.length) {
      setValue("topic", `${topics[0].id}`);
    }
  }, [setValue, topics]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <Controller
        control={control}
        name="sex"
        render={({ field: { onChange, onBlur, value } }) => (
          <Select
            label="Я ищу психолога"
            options={SexSelectOptions}
            onChange={onChange} // send value to hook form
            onBlur={onBlur} // notify when input is touched/blur
            value={value}
          />
        )}
      />
      <div className={styles.ageContainer}>
        <Label className={styles.ageLabel} small>
          В возрасте
        </Label>
        <div className={styles.ageFieldsContainer}>
          <div className={styles.ageSelectContainer}>
            От&nbsp;
            <Controller
              control={control}
              name="ageFrom"
              render={({ field: { onChange, onBlur, value } }) => (
                <Select
                  options={AgeSelectOptions}
                  onChange={onChange} // send value to hook form
                  onBlur={onBlur} // notify when input is touched/blur
                  value={value}
                />
              )}
            />
          </div>
          <div className={styles.ageSelectContainer}>
            До&nbsp;
            <Controller
              control={control}
              name="ageTo"
              render={({ field: { onChange, onBlur, value } }) => (
                <Select
                  options={AgeSelectOptions}
                  onChange={onChange} // send value to hook form
                  onBlur={onBlur} // notify when input is touched/blur
                  value={value}
                />
              )}
            />
          </div>
        </div>
      </div>
      <Controller
        control={control}
        name="topic"
        render={({ field: { onChange, onBlur, value } }) => (
          <Select
            label="Тема"
            small
            options={topicsOptions}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="qualification"
        render={({ field: { onChange, onBlur, value } }) => (
          <Select
            label="Квалификация"
            small
            options={QualificationSelectOptions}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="rating"
        render={({ field: { onChange, onBlur, value } }) => (
          <Select
            label="Рейтинг"
            small
            options={RatingSelectOptions}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <Button type="submit">Показать анкеты</Button>
    </form>
  );
}
