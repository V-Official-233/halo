/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { SinglePage } from '../models';
// @ts-ignore
import { SinglePageList } from '../models';
/**
 * ContentHaloRunV1alpha1SinglePageApi - axios parameter creator
 * @export
 */
export const ContentHaloRunV1alpha1SinglePageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create content.halo.run/v1alpha1/SinglePage
         * @param {SinglePage} [singlePage] Fresh singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createContentHaloRunV1alpha1SinglePage: async (singlePage?: SinglePage, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/content.halo.run/v1alpha1/singlepages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(singlePage, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete content.halo.run/v1alpha1/SinglePage
         * @param {string} name Name of singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteContentHaloRunV1alpha1SinglePage: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteContentHaloRunV1alpha1SinglePage', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/singlepages/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get content.halo.run/v1alpha1/SinglePage
         * @param {string} name Name of singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getContentHaloRunV1alpha1SinglePage: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getContentHaloRunV1alpha1SinglePage', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/singlepages/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List content.halo.run/v1alpha1/SinglePage
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listContentHaloRunV1alpha1SinglePage: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/content.halo.run/v1alpha1/singlepages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update content.halo.run/v1alpha1/SinglePage
         * @param {string} name Name of singlepage
         * @param {SinglePage} [singlePage] Updated singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateContentHaloRunV1alpha1SinglePage: async (name: string, singlePage?: SinglePage, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateContentHaloRunV1alpha1SinglePage', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/singlepages/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(singlePage, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContentHaloRunV1alpha1SinglePageApi - functional programming interface
 * @export
 */
export const ContentHaloRunV1alpha1SinglePageApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContentHaloRunV1alpha1SinglePageApiAxiosParamCreator(configuration)
    return {
        /**
         * Create content.halo.run/v1alpha1/SinglePage
         * @param {SinglePage} [singlePage] Fresh singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createContentHaloRunV1alpha1SinglePage(singlePage?: SinglePage, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SinglePage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createContentHaloRunV1alpha1SinglePage(singlePage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContentHaloRunV1alpha1SinglePageApi.createContentHaloRunV1alpha1SinglePage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete content.halo.run/v1alpha1/SinglePage
         * @param {string} name Name of singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteContentHaloRunV1alpha1SinglePage(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteContentHaloRunV1alpha1SinglePage(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContentHaloRunV1alpha1SinglePageApi.deleteContentHaloRunV1alpha1SinglePage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get content.halo.run/v1alpha1/SinglePage
         * @param {string} name Name of singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getContentHaloRunV1alpha1SinglePage(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SinglePage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getContentHaloRunV1alpha1SinglePage(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContentHaloRunV1alpha1SinglePageApi.getContentHaloRunV1alpha1SinglePage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List content.halo.run/v1alpha1/SinglePage
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listContentHaloRunV1alpha1SinglePage(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SinglePageList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listContentHaloRunV1alpha1SinglePage(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContentHaloRunV1alpha1SinglePageApi.listContentHaloRunV1alpha1SinglePage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update content.halo.run/v1alpha1/SinglePage
         * @param {string} name Name of singlepage
         * @param {SinglePage} [singlePage] Updated singlepage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateContentHaloRunV1alpha1SinglePage(name: string, singlePage?: SinglePage, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SinglePage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateContentHaloRunV1alpha1SinglePage(name, singlePage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContentHaloRunV1alpha1SinglePageApi.updateContentHaloRunV1alpha1SinglePage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ContentHaloRunV1alpha1SinglePageApi - factory interface
 * @export
 */
export const ContentHaloRunV1alpha1SinglePageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContentHaloRunV1alpha1SinglePageApiFp(configuration)
    return {
        /**
         * Create content.halo.run/v1alpha1/SinglePage
         * @param {ContentHaloRunV1alpha1SinglePageApiCreateContentHaloRunV1alpha1SinglePageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createContentHaloRunV1alpha1SinglePage(requestParameters: ContentHaloRunV1alpha1SinglePageApiCreateContentHaloRunV1alpha1SinglePageRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SinglePage> {
            return localVarFp.createContentHaloRunV1alpha1SinglePage(requestParameters.singlePage, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete content.halo.run/v1alpha1/SinglePage
         * @param {ContentHaloRunV1alpha1SinglePageApiDeleteContentHaloRunV1alpha1SinglePageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteContentHaloRunV1alpha1SinglePage(requestParameters: ContentHaloRunV1alpha1SinglePageApiDeleteContentHaloRunV1alpha1SinglePageRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteContentHaloRunV1alpha1SinglePage(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get content.halo.run/v1alpha1/SinglePage
         * @param {ContentHaloRunV1alpha1SinglePageApiGetContentHaloRunV1alpha1SinglePageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getContentHaloRunV1alpha1SinglePage(requestParameters: ContentHaloRunV1alpha1SinglePageApiGetContentHaloRunV1alpha1SinglePageRequest, options?: RawAxiosRequestConfig): AxiosPromise<SinglePage> {
            return localVarFp.getContentHaloRunV1alpha1SinglePage(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List content.halo.run/v1alpha1/SinglePage
         * @param {ContentHaloRunV1alpha1SinglePageApiListContentHaloRunV1alpha1SinglePageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listContentHaloRunV1alpha1SinglePage(requestParameters: ContentHaloRunV1alpha1SinglePageApiListContentHaloRunV1alpha1SinglePageRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SinglePageList> {
            return localVarFp.listContentHaloRunV1alpha1SinglePage(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Update content.halo.run/v1alpha1/SinglePage
         * @param {ContentHaloRunV1alpha1SinglePageApiUpdateContentHaloRunV1alpha1SinglePageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateContentHaloRunV1alpha1SinglePage(requestParameters: ContentHaloRunV1alpha1SinglePageApiUpdateContentHaloRunV1alpha1SinglePageRequest, options?: RawAxiosRequestConfig): AxiosPromise<SinglePage> {
            return localVarFp.updateContentHaloRunV1alpha1SinglePage(requestParameters.name, requestParameters.singlePage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createContentHaloRunV1alpha1SinglePage operation in ContentHaloRunV1alpha1SinglePageApi.
 * @export
 * @interface ContentHaloRunV1alpha1SinglePageApiCreateContentHaloRunV1alpha1SinglePageRequest
 */
export interface ContentHaloRunV1alpha1SinglePageApiCreateContentHaloRunV1alpha1SinglePageRequest {
    /**
     * Fresh singlepage
     * @type {SinglePage}
     * @memberof ContentHaloRunV1alpha1SinglePageApiCreateContentHaloRunV1alpha1SinglePage
     */
    readonly singlePage?: SinglePage
}

/**
 * Request parameters for deleteContentHaloRunV1alpha1SinglePage operation in ContentHaloRunV1alpha1SinglePageApi.
 * @export
 * @interface ContentHaloRunV1alpha1SinglePageApiDeleteContentHaloRunV1alpha1SinglePageRequest
 */
export interface ContentHaloRunV1alpha1SinglePageApiDeleteContentHaloRunV1alpha1SinglePageRequest {
    /**
     * Name of singlepage
     * @type {string}
     * @memberof ContentHaloRunV1alpha1SinglePageApiDeleteContentHaloRunV1alpha1SinglePage
     */
    readonly name: string
}

/**
 * Request parameters for getContentHaloRunV1alpha1SinglePage operation in ContentHaloRunV1alpha1SinglePageApi.
 * @export
 * @interface ContentHaloRunV1alpha1SinglePageApiGetContentHaloRunV1alpha1SinglePageRequest
 */
export interface ContentHaloRunV1alpha1SinglePageApiGetContentHaloRunV1alpha1SinglePageRequest {
    /**
     * Name of singlepage
     * @type {string}
     * @memberof ContentHaloRunV1alpha1SinglePageApiGetContentHaloRunV1alpha1SinglePage
     */
    readonly name: string
}

/**
 * Request parameters for listContentHaloRunV1alpha1SinglePage operation in ContentHaloRunV1alpha1SinglePageApi.
 * @export
 * @interface ContentHaloRunV1alpha1SinglePageApiListContentHaloRunV1alpha1SinglePageRequest
 */
export interface ContentHaloRunV1alpha1SinglePageApiListContentHaloRunV1alpha1SinglePageRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof ContentHaloRunV1alpha1SinglePageApiListContentHaloRunV1alpha1SinglePage
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof ContentHaloRunV1alpha1SinglePageApiListContentHaloRunV1alpha1SinglePage
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof ContentHaloRunV1alpha1SinglePageApiListContentHaloRunV1alpha1SinglePage
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof ContentHaloRunV1alpha1SinglePageApiListContentHaloRunV1alpha1SinglePage
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof ContentHaloRunV1alpha1SinglePageApiListContentHaloRunV1alpha1SinglePage
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for updateContentHaloRunV1alpha1SinglePage operation in ContentHaloRunV1alpha1SinglePageApi.
 * @export
 * @interface ContentHaloRunV1alpha1SinglePageApiUpdateContentHaloRunV1alpha1SinglePageRequest
 */
export interface ContentHaloRunV1alpha1SinglePageApiUpdateContentHaloRunV1alpha1SinglePageRequest {
    /**
     * Name of singlepage
     * @type {string}
     * @memberof ContentHaloRunV1alpha1SinglePageApiUpdateContentHaloRunV1alpha1SinglePage
     */
    readonly name: string

    /**
     * Updated singlepage
     * @type {SinglePage}
     * @memberof ContentHaloRunV1alpha1SinglePageApiUpdateContentHaloRunV1alpha1SinglePage
     */
    readonly singlePage?: SinglePage
}

/**
 * ContentHaloRunV1alpha1SinglePageApi - object-oriented interface
 * @export
 * @class ContentHaloRunV1alpha1SinglePageApi
 * @extends {BaseAPI}
 */
export class ContentHaloRunV1alpha1SinglePageApi extends BaseAPI {
    /**
     * Create content.halo.run/v1alpha1/SinglePage
     * @param {ContentHaloRunV1alpha1SinglePageApiCreateContentHaloRunV1alpha1SinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentHaloRunV1alpha1SinglePageApi
     */
    public createContentHaloRunV1alpha1SinglePage(requestParameters: ContentHaloRunV1alpha1SinglePageApiCreateContentHaloRunV1alpha1SinglePageRequest = {}, options?: RawAxiosRequestConfig) {
        return ContentHaloRunV1alpha1SinglePageApiFp(this.configuration).createContentHaloRunV1alpha1SinglePage(requestParameters.singlePage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete content.halo.run/v1alpha1/SinglePage
     * @param {ContentHaloRunV1alpha1SinglePageApiDeleteContentHaloRunV1alpha1SinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentHaloRunV1alpha1SinglePageApi
     */
    public deleteContentHaloRunV1alpha1SinglePage(requestParameters: ContentHaloRunV1alpha1SinglePageApiDeleteContentHaloRunV1alpha1SinglePageRequest, options?: RawAxiosRequestConfig) {
        return ContentHaloRunV1alpha1SinglePageApiFp(this.configuration).deleteContentHaloRunV1alpha1SinglePage(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get content.halo.run/v1alpha1/SinglePage
     * @param {ContentHaloRunV1alpha1SinglePageApiGetContentHaloRunV1alpha1SinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentHaloRunV1alpha1SinglePageApi
     */
    public getContentHaloRunV1alpha1SinglePage(requestParameters: ContentHaloRunV1alpha1SinglePageApiGetContentHaloRunV1alpha1SinglePageRequest, options?: RawAxiosRequestConfig) {
        return ContentHaloRunV1alpha1SinglePageApiFp(this.configuration).getContentHaloRunV1alpha1SinglePage(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List content.halo.run/v1alpha1/SinglePage
     * @param {ContentHaloRunV1alpha1SinglePageApiListContentHaloRunV1alpha1SinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentHaloRunV1alpha1SinglePageApi
     */
    public listContentHaloRunV1alpha1SinglePage(requestParameters: ContentHaloRunV1alpha1SinglePageApiListContentHaloRunV1alpha1SinglePageRequest = {}, options?: RawAxiosRequestConfig) {
        return ContentHaloRunV1alpha1SinglePageApiFp(this.configuration).listContentHaloRunV1alpha1SinglePage(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update content.halo.run/v1alpha1/SinglePage
     * @param {ContentHaloRunV1alpha1SinglePageApiUpdateContentHaloRunV1alpha1SinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentHaloRunV1alpha1SinglePageApi
     */
    public updateContentHaloRunV1alpha1SinglePage(requestParameters: ContentHaloRunV1alpha1SinglePageApiUpdateContentHaloRunV1alpha1SinglePageRequest, options?: RawAxiosRequestConfig) {
        return ContentHaloRunV1alpha1SinglePageApiFp(this.configuration).updateContentHaloRunV1alpha1SinglePage(requestParameters.name, requestParameters.singlePage, options).then((request) => request(this.axios, this.basePath));
    }
}

