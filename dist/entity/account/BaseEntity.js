"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseEntity = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _typeorm = require("typeorm");

var _DateTimeUtils = require("../../utils/DateTimeUtils");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

var BaseEntity = (_dec = (0, _typeorm.PrimaryGeneratedColumn)({
  name: "id",
  type: "bigint"
}), _dec2 = (0, _typeorm.Column)({
  name: "createdDate",
  type: "varchar",
  length: 32,
  "default": ""
}), _dec3 = (0, _typeorm.Column)({
  name: "createdBy",
  type: "bigint",
  nullable: true
}), _dec4 = (0, _typeorm.Column)({
  name: "lastModifiedDate",
  type: "varchar",
  length: 32,
  "default": ""
}), _dec5 = (0, _typeorm.Column)({
  name: "lastModifiedAction",
  type: "varchar",
  length: 256,
  "default": ""
}), _dec6 = (0, _typeorm.Column)({
  name: "lastModifiedBy",
  type: "bigint",
  nullable: true
}), (_class = (_temp = function BaseEntity(entityDto) {
  (0, _classCallCheck2["default"])(this, BaseEntity);
  (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "createdDate", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "createdBy", _descriptor3, this);
  (0, _initializerDefineProperty2["default"])(this, "lastModifiedDate", _descriptor4, this);
  (0, _initializerDefineProperty2["default"])(this, "lastModifiedAction", _descriptor5, this);
  (0, _initializerDefineProperty2["default"])(this, "lastModifiedBy", _descriptor6, this);

  if ((0, _typeof2["default"])(entityDto) === "object") {
    if (entityDto.id) {
      this.id = entityDto.id;
    }

    this.createdDate = entityDto.createdDate || (0, _DateTimeUtils.newMySQLDateISOString)();
    this.createdBy = entityDto.createdBy || null;
    this.lastModifiedDate = entityDto.lastModifiedDate || (0, _DateTimeUtils.newMySQLDateISOString)();
    this.lastModifiedAction = entityDto.lastModifiedAction || "";
    this.lastModifiedBy = entityDto.lastModifiedBy || null;
  }
}, _temp), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "id", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "createdDate", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "createdBy", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "lastModifiedDate", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "lastModifiedAction", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "lastModifiedBy", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdHkvYWNjb3VudC9CYXNlRW50aXR5LmpzIl0sIm5hbWVzIjpbIkJhc2VFbnRpdHkiLCJuYW1lIiwidHlwZSIsImxlbmd0aCIsIm51bGxhYmxlIiwiZW50aXR5RHRvIiwiaWQiLCJjcmVhdGVkRGF0ZSIsImNyZWF0ZWRCeSIsImxhc3RNb2RpZmllZERhdGUiLCJsYXN0TW9kaWZpZWRBY3Rpb24iLCJsYXN0TW9kaWZpZWRCeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7O0lBRWFBLFUsV0FFUixxQ0FBdUI7QUFBRUMsRUFBQUEsSUFBSSxFQUFFLElBQVI7QUFBY0MsRUFBQUEsSUFBSSxFQUFFO0FBQXBCLENBQXZCLEMsVUFHQSxxQkFBTztBQUFFRCxFQUFBQSxJQUFJLEVBQUUsYUFBUjtBQUF1QkMsRUFBQUEsSUFBSSxFQUFFLFNBQTdCO0FBQXdDQyxFQUFBQSxNQUFNLEVBQUUsRUFBaEQ7QUFBb0QsYUFBUztBQUE3RCxDQUFQLEMsVUFHQSxxQkFBTztBQUFFRixFQUFBQSxJQUFJLEVBQUUsV0FBUjtBQUFxQkMsRUFBQUEsSUFBSSxFQUFFLFFBQTNCO0FBQXFDRSxFQUFBQSxRQUFRLEVBQUU7QUFBL0MsQ0FBUCxDLFVBR0EscUJBQU87QUFBRUgsRUFBQUEsSUFBSSxFQUFFLGtCQUFSO0FBQTRCQyxFQUFBQSxJQUFJLEVBQUUsU0FBbEM7QUFBNkNDLEVBQUFBLE1BQU0sRUFBRSxFQUFyRDtBQUF5RCxhQUFTO0FBQWxFLENBQVAsQyxVQUdBLHFCQUFPO0FBQUVGLEVBQUFBLElBQUksRUFBRSxvQkFBUjtBQUE4QkMsRUFBQUEsSUFBSSxFQUFFLFNBQXBDO0FBQStDQyxFQUFBQSxNQUFNLEVBQUUsR0FBdkQ7QUFBNEQsYUFBUztBQUFyRSxDQUFQLEMsVUFHQSxxQkFBTztBQUFFRixFQUFBQSxJQUFJLEVBQUUsZ0JBQVI7QUFBMEJDLEVBQUFBLElBQUksRUFBRSxRQUFoQztBQUEwQ0UsRUFBQUEsUUFBUSxFQUFFO0FBQXBELENBQVAsQyxxQkFHRCxvQkFBWUMsU0FBWixFQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNuQixNQUFJLHlCQUFPQSxTQUFQLE1BQXFCLFFBQXpCLEVBQW1DO0FBQy9CLFFBQUlBLFNBQVMsQ0FBQ0MsRUFBZCxFQUFrQjtBQUNkLFdBQUtBLEVBQUwsR0FBVUQsU0FBUyxDQUFDQyxFQUFwQjtBQUNIOztBQUNELFNBQUtDLFdBQUwsR0FBbUJGLFNBQVMsQ0FBQ0UsV0FBVixJQUF5QiwyQ0FBNUM7QUFDQSxTQUFLQyxTQUFMLEdBQWlCSCxTQUFTLENBQUNHLFNBQVYsSUFBdUIsSUFBeEM7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkosU0FBUyxDQUFDSSxnQkFBVixJQUE4QiwyQ0FBdEQ7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQkwsU0FBUyxDQUFDSyxrQkFBVixJQUFnQyxFQUExRDtBQUNBLFNBQUtDLGNBQUwsR0FBc0JOLFNBQVMsQ0FBQ00sY0FBVixJQUE0QixJQUFsRDtBQUNIO0FBQ0osQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cbmltcG9ydCB7IG5ld015U1FMRGF0ZUlTT1N0cmluZyB9IGZyb20gXCIuLi8uLi91dGlscy9EYXRlVGltZVV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlRW50aXR5IHtcblxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKHsgbmFtZTogXCJpZFwiLCB0eXBlOiBcImJpZ2ludFwiIH0pXG4gICAgaWQ6IG51bWJlcjtcblxuICAgIEBDb2x1bW4oeyBuYW1lOiBcImNyZWF0ZWREYXRlXCIsIHR5cGU6IFwidmFyY2hhclwiLCBsZW5ndGg6IDMyLCBkZWZhdWx0OiBcIlwiIH0pXG4gICAgY3JlYXRlZERhdGU6IHN0cmluZztcblxuICAgIEBDb2x1bW4oeyBuYW1lOiBcImNyZWF0ZWRCeVwiLCB0eXBlOiBcImJpZ2ludFwiLCBudWxsYWJsZTogdHJ1ZSB9KVxuICAgIGNyZWF0ZWRCeTogbnVtYmVyO1xuXG4gICAgQENvbHVtbih7IG5hbWU6IFwibGFzdE1vZGlmaWVkRGF0ZVwiLCB0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiAzMiwgZGVmYXVsdDogXCJcIiB9KVxuICAgIGxhc3RNb2RpZmllZERhdGU6IHN0cmluZztcblxuICAgIEBDb2x1bW4oeyBuYW1lOiBcImxhc3RNb2RpZmllZEFjdGlvblwiLCB0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiAyNTYsIGRlZmF1bHQ6IFwiXCIgfSlcbiAgICBsYXN0TW9kaWZpZWRBY3Rpb246IHN0cmluZztcblxuICAgIEBDb2x1bW4oeyBuYW1lOiBcImxhc3RNb2RpZmllZEJ5XCIsIHR5cGU6IFwiYmlnaW50XCIsIG51bGxhYmxlOiB0cnVlIH0pXG4gICAgbGFzdE1vZGlmaWVkQnk6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGVudGl0eUR0bykge1xuICAgICAgICBpZiAodHlwZW9mIGVudGl0eUR0byA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaWYgKGVudGl0eUR0by5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBlbnRpdHlEdG8uaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWREYXRlID0gZW50aXR5RHRvLmNyZWF0ZWREYXRlIHx8IG5ld015U1FMRGF0ZUlTT1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVkQnkgPSBlbnRpdHlEdG8uY3JlYXRlZEJ5IHx8IG51bGw7XG4gICAgICAgICAgICB0aGlzLmxhc3RNb2RpZmllZERhdGUgPSBlbnRpdHlEdG8ubGFzdE1vZGlmaWVkRGF0ZSB8fCBuZXdNeVNRTERhdGVJU09TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vZGlmaWVkQWN0aW9uID0gZW50aXR5RHRvLmxhc3RNb2RpZmllZEFjdGlvbiB8fCBcIlwiO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW9kaWZpZWRCeSA9IGVudGl0eUR0by5sYXN0TW9kaWZpZWRCeSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19