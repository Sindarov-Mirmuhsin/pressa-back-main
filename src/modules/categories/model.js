import { fetchAll, fetch } from "../../lib/postgres.js";
import {
  GETCATEGORY,
  POSTCATEGORY,
  PUTCATEGORY,
  DELETECATEGORY,
} from "./query.js";

const GET =  async ({categoryId=0}) => {
  try {
    const categoris = await fetchAll(GETCATEGORY, [categoryId])

    return categoris?.map(category => {
      category.sub_categories = category.sub_categories[0] == null ? [] : category.sub_categories
      return category
    })


  } catch (error) {
    console.log(error);
  }
};


const POST = async ({category_name}) => {
    try {
        return await fetch(POSTCATEGORY, [category_name])
    } catch (error) {
        console.log(error);
    }
}

const PUT = async ({categoryId},{ category_name }) => {
  try {
    return await fetch(PUTCATEGORY, [category_name, categoryId]);
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async ({ categoryId }) => {
  try {
    return await fetch(DELETECATEGORY, [categoryId]);
  } catch (error) {
    console.log(error);
  }
};

export default {
  GET,
  POST,
  PUT,
  DELETE,
};
