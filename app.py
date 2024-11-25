from flask import Flask, jsonify, request
import json

app = Flask(__name__)


def read_json_file():
    with open("data.json", "r") as file:
        return json.load(file)


def write_json_file(data):
    with open('data.json', 'w') as file:
        json.dump(data, file, indent=4)


@app.route("/", methods=['GET'])
def get_all_data():
    data = read_json_file()
    return jsonify(data)


@app.route("/data/<int:item_id>", methods=['GET'])
def get_data_by_id(item_id):
    data = read_json_file()
    entry = next((item for item in data if item['id'] == item_id), None)
    if entry:
        return jsonify(entry)
    return jsonify({"message": "Item not found"}), 404


@app.route('/', methods=['POST'])
def add_data():
    new_entry = request.get_json()
    data = read_json_file()
    data.append(new_entry)
    write_json_file(data)
    return jsonify({'message': 'Entry added successfully'}), 201


@app.route("/data/<int:item_id>", methods=['DELETE'])
def delete_data_by_id(item_id):
    data = read_json_file()
    entry = next((item for item in data if item['id'] == item_id), None)
    if entry:
        data.remove(entry)
        write_json_file(data)
        return jsonify({"message": f"Entry with id {item_id} deleted successfully"}), 200
    return jsonify({"message": "Item not found"}), 404


@app.route("/data/<int:item_id>", methods=['PATCH'])
def patch_data_by_id(item_id):
    data = read_json_file()
    entry = next((item for item in data if item['id'] == item_id), None)
    if entry:
        update_data = request.get_json()
        for key, value in update_data.items():
            if key in entry:
                entry[key] = value

        write_json_file(data)
        return jsonify({"message": f"Entry with id {item_id} updated successfully"}), 200
    return jsonify({"message": "Item not found"}), 404


if __name__ == '__main__':
    app.run(debug=True, port=5000)
