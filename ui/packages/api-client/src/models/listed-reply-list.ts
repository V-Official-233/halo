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


// May contain unused imports in some cases
// @ts-ignore
import { ListedReply } from './listed-reply';

/**
 * 
 * @export
 * @interface ListedReplyList
 */
export interface ListedReplyList {
    /**
     * Indicates whether current page is the first page.
     * @type {boolean}
     * @memberof ListedReplyList
     */
    'first': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof ListedReplyList
     */
    'hasNext': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof ListedReplyList
     */
    'hasPrevious': boolean;
    /**
     * A chunk of items.
     * @type {Array<ListedReply>}
     * @memberof ListedReplyList
     */
    'items': Array<ListedReply>;
    /**
     * Indicates whether current page is the last page.
     * @type {boolean}
     * @memberof ListedReplyList
     */
    'last': boolean;
    /**
     * Page number, starts from 1. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof ListedReplyList
     */
    'page': number;
    /**
     * Size of each page. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof ListedReplyList
     */
    'size': number;
    /**
     * Total elements.
     * @type {number}
     * @memberof ListedReplyList
     */
    'total': number;
    /**
     * Indicates total pages.
     * @type {number}
     * @memberof ListedReplyList
     */
    'totalPages': number;
}

