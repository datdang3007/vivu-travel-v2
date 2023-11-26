import { MenuItem } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useMutation, useQuery } from "react-query";
import {
  authLogin,
  authSignUp,
  checkExistEmail,
  getUserProfile,
} from "src/apis/auth.api";
import { getPlaceCategoryList } from "src/apis/place-category.api";
import { findPlaceImageByPlaceID } from "src/apis/place-image-stock.api";
import { findPlaceByID, getPlaceList } from "src/apis/place.api";
import {
  createPost,
  findPostByID,
  findPostByStatus,
  getPostList,
} from "src/apis/post.api.";
import { findProvinceByID, getProvinceList } from "src/apis/province.api";
import { findRegionByID, getRegionList } from "src/apis/region.api";
import { findTerritoryByID, getTerritoryList } from "src/apis/territory.api";

// Hook call API auth:
export const useCallAPIAuth = () => {
  const { mutateAsync: requestLogin, isLoading: loadingForLogin } = useMutation(
    {
      mutationFn: authLogin,
    }
  );

  const { mutateAsync: requestSignUp, isLoading: loadingForSignUp } =
    useMutation({
      mutationFn: authSignUp,
    });

  const {
    mutateAsync: requestCheckExistEmail,
    isLoading: loadingForCheckExistEmail,
  } = useMutation({
    mutationFn: checkExistEmail,
  });

  const {
    mutateAsync: requestGetUserProfile,
    isLoading: loadingForGetUserProfile,
  } = useMutation({
    mutationFn: getUserProfile,
  });

  return {
    requestLogin,
    loadingForLogin,
    requestSignUp,
    loadingForSignUp,
    requestCheckExistEmail,
    loadingForCheckExistEmail,
    requestGetUserProfile,
    loadingForGetUserProfile,
  };
};

// Hook call API list:
export const useCallApiList = () => {
  // Region
  const {
    data: regionList = [],
    refetch: refetchRegionList,
    isLoading: loadingRegionList,
  } = useQuery(["getRegionList"], getRegionList);

  // Territory
  const {
    data: territoryList = [],
    refetch: refetchTerritoryList,
    isLoading: loadingTerritoryList,
  } = useQuery(["getTerritoryList"], getTerritoryList);

  // Province
  const {
    data: provinceList = [],
    refetch: refetchProvinceList,
    isLoading: loadingProvinceList,
  } = useQuery(["getProvinceList"], getProvinceList);

  // Place
  const {
    data: placeList = [],
    refetch: refetchPlaceList,
    isLoading: loadingPlaceList,
  } = useQuery(["getPlaceList"], getPlaceList);

  // Place Category
  const {
    data: placeCategoryList = [],
    refetch: refetchPlaceCategoryList,
    isLoading: loadingPlaceCategoryList,
  } = useQuery(["getPlaceCategoryList"], getPlaceCategoryList);

  // Post
  const {
    data: postList = [],
    refetch: refetchPostList,
    isLoading: loadingPostList,
  } = useQuery(["getPostList"], getPostList);

  return {
    regionList,
    loadingRegionList,
    refetchRegionList,
    territoryList,
    loadingTerritoryList,
    refetchTerritoryList,
    provinceList,
    loadingProvinceList,
    refetchProvinceList,
    placeList,
    loadingPlaceList,
    refetchPlaceList,
    placeCategoryList,
    loadingPlaceCategoryList,
    refetchPlaceCategoryList,
    postList,
    refetchPostList,
    loadingPostList,
  };
};

// Hook call API find:
export function useCallAPIFind() {
  // Region
  const { mutateAsync: requestFindRegionByID, isLoading: loadingFindRegion } =
    useMutation({
      mutationFn: findRegionByID,
    });

  // Territory
  const {
    mutateAsync: requestFindTerritoryByID,
    isLoading: loadingFindTerritory,
  } = useMutation({
    mutationFn: findTerritoryByID,
  });

  // Province
  const {
    mutateAsync: requestFindProvinceByID,
    isLoading: loadingFindProvince,
  } = useMutation({
    mutationFn: findProvinceByID,
  });

  // Place
  const { mutateAsync: requestFindPlaceByID, isLoading: loadingFindPlace } =
    useMutation({
      mutationFn: findPlaceByID,
    });

  // Place Image
  const {
    mutateAsync: requestFindPlaceImageStockByPlaceID,
    isLoading: loadingFindPlaceImageStockByPlaceID,
  } = useMutation({
    mutationFn: findPlaceImageByPlaceID,
  });

  // -- Post
  const { mutateAsync: requestFindPostByID, isLoading: loadingFindPostByID } =
    useMutation({
      mutationFn: findPostByID,
    });

  const {
    mutateAsync: requestFindPostByStatus,
    isLoading: loadingFindPostByStatus,
  } = useMutation({
    mutationFn: findPostByStatus,
  });
  // -- End

  return {
    requestFindProvinceByID,
    loadingFindProvince,
    requestFindRegionByID,
    loadingFindRegion,
    requestFindTerritoryByID,
    loadingFindTerritory,
    requestFindPlaceByID,
    loadingFindPlace,
    requestFindPlaceImageStockByPlaceID,
    loadingFindPlaceImageStockByPlaceID,
    requestFindPostByID,
    loadingFindPostByID,
    requestFindPostByStatus,
    loadingFindPostByStatus,
  };
}

// Hook call API create:
export const useCallAPICreate = () => {
  // Post
  const { mutateAsync: requestCreatePost, isLoading: loadingCreatePost } =
    useMutation({
      mutationFn: createPost,
    });
  return { requestCreatePost, loadingCreatePost };
};

// Hook format select from API data:
export const useSelectHook = (data: any[], value?: string, label?: string) => {
  const optionValue = useMemo(() => {
    return value ?? "id";
  }, [value]);

  const optionLabel = useMemo(() => {
    return label ?? "name";
  }, [label]);

  const options = data.map((val) => ({
    value: val[optionValue],
    label: val[optionLabel],
  }));

  const autocompleteOptions = data.map((val) => ({
    id: val[optionValue],
    label: val[optionLabel],
  }));

  // Function render select field:
  const SelectField = useCallback(() => {
    const convertOptions = [...options];
    return convertOptions.map((val) => (
      <MenuItem key={val.value} value={val.value}>
        {val.label}
      </MenuItem>
    ));
  }, [options]);

  return { options, autocompleteOptions, SelectField };
};
